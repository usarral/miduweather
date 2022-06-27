<script>
	import { getDayForecast } from '../services/forecastWeather.js';
	const ForecastPromise = getDayForecast('Madrid');
</script>

<div class="rounded-xl bg-zinc-500">
	{#await ForecastPromise then forecast}
		<h1>{forecast.current.name}</h1>
		<h2>{Math.round(forecast.current.temp)}</h2>
		<p>{forecast.current.condition_text}</p>
		<div class="flex flex-row justify-around">
			<p>Max: {forecast.day.maxtemp_c + '° C'}</p>
			<p>Min: {forecast.day.mintemp_c + '° C'}</p>
		</div>
	{/await}
</div>

<style>
</style>
