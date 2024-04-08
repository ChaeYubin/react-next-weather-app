import WeatherInfoBar from "@/components/WeatherInfoBar/WeatherInfoBar";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow w-full h-full p-4 homePage lg:p-20">
      <WeatherInfoBar />
    </main>
  );
}
