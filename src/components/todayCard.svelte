<script>
	import { getDayForecast } from '../services/forecastWeather.js';
	const ForecastPromise = getDayForecast('Madrid');

	const d = new Date();
	let hour = d.getHours();
</script>

<!-- -- -->
<div class="card bg-slate-400 rounded-xl">
	{#await ForecastPromise then forecast}
		{#if hour >= 21}
			<div class="flex flex-row justify-around items-center w-100 h-auto rounded-xl p-2.5">
				<div class="block items-center">
					19:00
					<br />
					{forecast.hour[19].feelslike_c}
					<br />
					<img src={forecast.hour[19].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					20:00
					<br />
					{forecast.hour[20].feelslike_c}
					<br />
					<img src={forecast.hour[20].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					21:00
					<br />
					{forecast.hour[21].feelslike_c} <br />
					<img src={forecast.hour[21].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					22:00
					<br />
					{forecast.hour[22].feelslike_c} <br />
					<img src={forecast.hour[22].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					23:00
					<br />
					{forecast.hour[23].feelslike_c} <br />
					<img src={forecast.hour[23].condition.icon} alt="" class="w-10" />
				</div>
			</div>
		{/if}
		{#if hour <= 2}
			<div class="flex flex-row justify-around items-center w-100 h-auto rounded-xl p-2.5">
				<div class="block">
					0:00
					<br />
					{forecast.hour[0].feelslike_c}
					<br />
					<img src={forecast.hour[0].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					1:00
					<br />
					{forecast.hour[1].feelslike_c} <br />
					<img src={forecast.hour[1].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					2:00
					<br />
					{forecast.hour[2].feelslike_c} <br />
					<img src={forecast.hour[2].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					3:00
					<br />
					{forecast.hour[3].feelslike_c} <br />
					<img src={forecast.hour[3].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					4:00
					<br />
					{forecast.hour[4].feelslike_c} <br />
					<img src={forecast.hour[4].condition.icon} alt="" class="w-10" />
				</div>
			</div>
		{/if}
		{#if hour > 3 && hour < 21}
			<div class="flex flex-row justify-around items-center w-100 h-auto rounded-xl p-2.5">
				<div class="block">
					{hour - 2}
					<br />
					{forecast.hour[hour - 2].feelslike_c} <br />
					<img src={forecast.hour[hour - 2].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					{hour - 1}
					<br />
					{forecast.hour[hour - 1].feelslike_c} <br />
					<img src={forecast.hour[hour - 1].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					{hour}
					<br />
					{forecast.hour[hour].feelslike_c}<br />
					<img src={forecast.hour[hour].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					{hour + 1}
					<br />
					{forecast.hour[hour + 1].feelslike_c}
					<br />
					<img src={forecast.hour[hour + 1].condition.icon} alt="" class="w-10" />
				</div>
				<div class="block">
					{hour + 2}
					<br />
					{forecast.hour[hour + 2].feelslike_c}<br />
					<img src={forecast.hour[hour + 2].condition.icon} alt="" class="w-10" />
				</div>
			</div>
		{/if}
	{/await}
</div>

<!-- <style> -->
<style>
</style>
