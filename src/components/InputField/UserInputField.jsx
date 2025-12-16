export function UserInputField({
  id,
  label,
  type = "text",
  placeholder,
  error,
  className = "",
  ...inputProps
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
        {...inputProps}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
