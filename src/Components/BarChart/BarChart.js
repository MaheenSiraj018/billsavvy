import React, { useState, useEffect } from 'react';
import {CategoryScale} from 'react-chartjs-2'; 
import { Bar } from 'react-chartjs-2';
import "./barchart.css";


const BarChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Dummy data for testing (replace this with your actual backend data)
        const dummyData = [
            {
                _id: 'dummyId',
                user: 'dummyUserId',
                bedrooms: 3,
                people: 4,
                ac: 'Yes',
                television: 'No',
                fans: 2,
                efficientAppliances: 'Yes',
                renewableEnergy: 'No',
                laundryFrequency: 'More than 10 times',
                devices: 'More than 5',
            },
        ];

        // Transform the dummy data for the bar chart
        const transformedData = transformDataForChart(dummyData);
        setChartData(transformedData);
    }, []);

    const transformDataForChart = (formData) => {
        const labels = Object.keys(formData[0]).filter(key => key !== '_id' && key !== 'user');
        const datasets = [
            {
                label: 'Quantity',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: labels.map(label => {
                    const value = formData[0][label];
                    return value === 'Yes' ? 1 : value === 'No' ? 0 : value;
                }),
            },
        ];

        return { labels, datasets };
    };

    return (
        <div className='barchart'>
//             <h1 className="barchartheader">Consumption<span> Trends</span></h1>
            {chartData && (
                <div>
                    <Bar data={chartData} />
                    {/* Additional UI elements or information can be added here */}
                </div>
            )}
        </div>
    );
};

export default BarChart;


// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import "./barchart.css";

// const BarChart = ({ userId, formData }) => {
//     const [chartData, setChartData] = useState(null);

//     useEffect(() => {
//         // Fetch user form data based on userId
//         fetch(/api/user-form-data/${userId})
//             .then(response => response.json())
//             .then(data => {
//                 if (data.formData) {
//                     // Transform the data for the bar chart
//                     const transformedData = transformDataForChart(data.formData);
//                     setChartData(transformedData);
//                 }
//             })
//             .catch(error => console.error('Error fetching user form data:', error));
//     }, [userId]);

//     const transformDataForChart = (formData) => {
//         const labels = Object.keys(formData[0]).filter(key => key !== '_id' && key !== 'user');
//         const datasets = [
//             {
//                 label: 'Quantity',
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderWidth: 1,
//                 hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//                 hoverBorderColor: 'rgba(75,192,192,1)',
//                 data: labels.map(label => {
//                     const value = formData[0][label];
//                     return value === 'Yes' ? 1 : value === 'No' ? 0 : value;
//                 }),
//             },
//         ];

//         return { labels, datasets };
//     };

//     return (
//         <div className='barchart'>
//             <h1 className="barchartheader">Consumption<span> Trends</span></h1>
//             {chartData && (
//                 <div>
//                     <Bar data={chartData} />
//                     {/* Additional UI elements or information can be added here */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BarChart;