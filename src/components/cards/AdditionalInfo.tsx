import * as React from 'react';
import Card from './Card';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../../api';

export interface AdditionalInfoProps {
}

export default function AdditionalInfo ({}: AdditionalInfoProps) {
    const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 14.39, lon: 120.88})
    })
    
  return (
    <Card title='Additional Weather Info' childrenClassName='flex flex-col gap-8'>
        Additional Info
    </Card>
  );
}
