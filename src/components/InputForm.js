import * as React from 'react';
import {
    Box, Stack, TextField, Checkbox, FormGroup, FormControlLabel,
    InputLabel, MenuItem, FormControl, Select, Button, CircularProgress, Typography
} from '@mui/material';
import axios from 'axios';

export default function InputForm() {
    const [dayOfWeek, setDayOfWeek] = React.useState('');
    const [staffExperience, setStaffExperience] = React.useState('');
    const [wasteCategory, setWasteCategory] = React.useState('');
    const [mealsServed, setMealsServed] = React.useState('');
    const [temperature, setTemperature] = React.useState('');
    const [humidity, setHumidity] = React.useState('');
    const [pastWaste, setPastWaste] = React.useState('');
    const [specialEvent, setSpecialEvent] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [predictionResult, setPredictionResult] = React.useState(null);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const staffExperiences = ['Beginner', 'Intermediate', 'Expert'];
    const wasteCategories = ['Dairy', 'Meat', 'Vegetables', 'Grains'];

    const handleDropdownChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleFloatChange = (setter) => (event) => {
        const value = event.target.value;
        if (value === '' || /^-?\d*(\.\d*)?$/.test(value)) {
            setter(value);
        }
    };

    const handleCheckboxChange = (event) => {
        setSpecialEvent(event.target.checked);
    };

    const handlePredict = async () => {
        setLoading(true);
        setPredictionResult(null);

        const requestData = {
            mealsServed,
            temperature,
            humidity,
            dayOfWeek,
            specialEvent,
            pastWaste,
            staffExperience,
            wasteCategory,
        };
        console.log("Sending data:", requestData);
    
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict_food_waste', requestData);
    
            console.log("Response received:", response.data);
            setPredictionResult(response.data.prediction);
        } catch (error) {
            console.error('Prediction error:', error);
            setPredictionResult('Error: Unable to fetch prediction.');
        } finally {
            setLoading(false);
        }
    };

    const handleOk  = () => {
        setDayOfWeek(null)
        setStaffExperience(null)
        setWasteCategory(null)
        setMealsServed(null)
        setTemperature(null)
        setHumidity(null)
        setPastWaste(null)
        setSpecialEvent(null)
        setLoading(null)
        setPredictionResult(null)
    }

    const buttonStyle = {
        fontWeight: 'bold',
        mt: 3,
        color: 'white',
        background: 'linear-gradient(45deg, rgba(129, 188, 74, 1) 0%, rgba(4, 101, 19, 1) 100%)',
        ':hover': {
            background: 'linear-gradient(45deg, rgba(106, 155, 61, 1) 0%, rgba(2, 58, 11, 1) 100%)',
            color: 'white',
        },
    };

    return (
        <Box sx={{ width: '80%', margin: 'auto' }}>
            {loading ? (
                <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: '300px' }}>
                    <CircularProgress />
                    <Typography variant="h6">Predicting...</Typography>
                </Stack>
            ) : predictionResult ? (
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textDecoration: 'underline'}}>Prediction Result</Typography>
                    <Typography variant="h5">The total food waste generated: {predictionResult} kg</Typography>
                    <Button variant="contained" onClick={handleOk} sx={buttonStyle}>OK</Button>
                </Stack>
            ) : (
                <Stack spacing={2}>
                    <TextField
                        id="meals_served"
                        label="Number of meals served"
                        variant="outlined"
                        value={mealsServed}
                        onChange={handleFloatChange(setMealsServed)}
                    />

                    <TextField
                        id="temperature_C"
                        label="Temperature (°C)"
                        variant="outlined"
                        value={temperature}
                        onChange={handleFloatChange(setTemperature)}
                    />

                    <TextField
                        id="humidity_percent"
                        label="Humidity percentage in the cafeteria"
                        variant="outlined"
                        value={humidity}
                        onChange={handleFloatChange(setHumidity)}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="day_of_week_select_label">Day of Week</InputLabel>
                        <Select
                            labelId="day_of_week_select_label"
                            id="day_of_week_select"
                            value={dayOfWeek}
                            onChange={handleDropdownChange(setDayOfWeek)}
                        >
                            {days.map((day) => (
                                <MenuItem key={day} value={day}>
                                    {day}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={specialEvent} onChange={handleCheckboxChange} />}
                            label="Special Event"
                        />
                    </FormGroup>

                    <TextField
                        id="past_waste_kg"
                        label="	The amount of food waste generated in the previous cycle (kg)"
                        variant="outlined"
                        value={pastWaste}
                        onChange={handleFloatChange(setPastWaste)}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="staff_experience_select_label">Staff Experience</InputLabel>
                        <Select
                            labelId="staff_experience_select_label"
                            id="Staff experience level"
                            value={staffExperience}
                            onChange={handleDropdownChange(setStaffExperience)}
                        >
                            {staffExperiences.map((experience) => (
                                <MenuItem key={experience} value={experience}>
                                    {experience}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="waste_categories_select_label">Type of food waste</InputLabel>
                        <Select
                            labelId="waste_categories_select_label"
                            id="waste_categories_select"
                            value={wasteCategory}
                            onChange={handleDropdownChange(setWasteCategory)}
                        >
                            {wasteCategories.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button type="submit" fullWidth variant="contained" sx={buttonStyle} onClick={handlePredict}>
                        PREDICT
                    </Button>
                </Stack>
            )}
        </Box>
    );
}
