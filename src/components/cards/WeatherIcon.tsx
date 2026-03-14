import clsx from "clsx";

export interface WeatherIconProps {
    src: string;
    className?: string;
}

export default function WeatherIcon ({src, className}: WeatherIconProps) {
  return (
   <img
   className={clsx("size-8", className)}
   src={`https://openweathermap.org/img/wn/${src}.png`}
   alt="Weather Icon"/>
  );
}


