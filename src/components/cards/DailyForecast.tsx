import Card from './Card';
import { getWeather } from '../../api';
import { useSuspenseQuery } from '@tanstack/react-query';
import WeatherIcon from './WeatherIcon';

export interface DailyForecastProps {
}

export default function DailyForecast ({}: DailyForecastProps) {
    const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 14.39, lon: 120.88})
  })
  
  return (
      <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
          {data?.daily.map(day => (
            <div key={day.dt} className='flex justify-between'>
                <p className='w-9'>{new Date(day.dt * 1000).toLocaleDateString(
                  undefined,
                  {weekday: "short"}
                )}</p>
                <WeatherIcon src={day.weather[0].icon}/>
                <p>{Math.round(day.temp.day)}°F</p>
                <p className='text-gray-500/75'>{Math.round(day.temp.min)}°F</p>
                <p className='text-gray-500/75'>{Math.round(day.temp.max)}°F</p>
            </div>
          ))}
      </Card>
  );
}
