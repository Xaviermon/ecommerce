/* eslint-disable react/prop-types */
export function InputFiel ({ register, placeholder, name, onChange, type, errors, labelText, requiredText, xlColSpan = 'xl:col-span-2', patternValue, patternText, disabled }) {
  return (
    <div className={`col-span-12 md:col-span-6 lg:col-span-4 ${xlColSpan} font-bold`}>
      <div className='flex flex-col'>
        <label className='text-left text-xl text-black'>{labelText}</label>
        <div className='relative flex w-full flex-wrap items-stretch focus:outline-none'>
          <input
            {...register(name, {
              onChange,
              required: requiredText,
              pattern: {
                value: patternValue,
                message: patternText
              }
            })}
            readOnly={disabled}
            type={type}
            className='px-4 py-3 [4px] placeholder-slate-300 placeholder-italic text-slate-600 relative bg-white rounded focus:border-[--color-green] text-sm border border-slate-300 outline-none focus:outline-none w-full'
            placeholder={placeholder}
            disabled={!!disabled}
          />
        </div>
        {errors?.[name]?.type === 'required' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
        {errors?.[name]?.type === 'pattern' && <p className='text-red-500 text-sm'>{errors[name].message}</p>}
      </div>
    </div>

  )
}
