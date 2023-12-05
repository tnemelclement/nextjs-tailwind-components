export default function InputSelect(
	{
		label = null,
		options = [],
		onChange,
		value = null,
		valueCode = "value",
		labelCode = "label",
		className = "",
		disabledOptions = [],
		resetAfterChange = false
	}
) {

	if (options === null) return <p>Vide</p>
	return (
		<div className={"flex flex-col "+className}>
			{label && <label className={"text-sm text-gray-500 mb-1"}>{label}</label>}
			<select
				className={"border border-gray-300 rounded-md p-2"}
				onChange={e => onChange(e.target.value)}
				value={resetAfterChange ? "" : value}
				defaultValue={""}
			>
				<option value={""} disabled>--</option>
				{options.map((opt, index) => (
					<option key={label+""+index} value={opt[valueCode]}>{opt[labelCode]}</option>
				))}
			</select>
		</div>
	)
}