import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"

function App() {

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 14.39, lon:  120.88})
  })
  const coords = {
    lat:14.39,
    lon: 120.88
  }
  return (
    <div className="flex flex-col gap-8">
    <Map />
    <CurrentWeather />
    <HourlyForecast />
    <DailyForecast />
    <AdditionalInfo coords={coords} />
    </div>
  )
}

export default App
