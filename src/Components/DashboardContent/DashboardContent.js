import React from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill
} from 'react-icons/bs';
import { KingBed, People, AcUnit, Tv, WbIncandescent, EnergySavingsLeaf, WbSunny, LocalLaundryService, DevicesOther } from '@mui/icons-material';
import { CssBaseline, Container, Box, Hidden, Grid, Typography } from '@mui/material';
import DashboardCard from '../DashboardCard/DashboardCard';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import BarChart from '../BarChart/BarChart';


function Dashboard() {
  const cardData = [
    { color: '#CDD583', icon: <KingBed />, title: 'No of Bedrooms', data: '3' },
    // { color: '#a5d6a7', icon: <People />, title: 'No of People in House', data: '5' },
    { color: '#E1EEC7', icon: <AcUnit />, title: 'Availability of AC', data: 'Yes' },
    { color: '#F8F8F8', icon: <Tv />, title: 'Availability of Television', data: 'Yes' },
    { color: '#F3B140', icon: <WbIncandescent />, title: 'No of Ceiling Fans', data: '4' },
    { color: '#CDD583', icon: <EnergySavingsLeaf />, title: 'Energy Efficient Appliances', data: 'Yes' },
    { color: '#E1EEC7', icon: <WbSunny />, title: 'Renewable Energy Sources', data: 'Solar' },
    { color: '#F8F8F8', icon: <LocalLaundryService />, title: 'Use of Washing Machine', data: 'Daily' },
    { color: '#F3B140', icon: <DevicesOther />, title: 'No of Electronic Devices', data: '10' },
  ];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>BILLSAVVY DASHBOARD</h3>
      </div>
      <div className='input-data'>
        <Grid container spacing={3}>
          {cardData.map(({ color, icon, title, data }, index) => (
            <Grid item key={index} xs={6} md={4} lg={3}>
              <DashboardCard color={color} icon={icon} title={title} data={data} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <BarChart/>
      </div>
      <div>
        <FeedbackForm/>
      </div>
    </main>
  );
}

export default Dashboard;
