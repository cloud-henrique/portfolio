import { Switch as SwitchComponent } from '@headlessui/react'

interface SwitchProps {
  checked: boolean
  onChange: () => void
}

export function Switch({ checked, onChange }: SwitchProps) {
  return (
    <SwitchComponent
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? 'bg-emerald-500' : 'bg-neutral-400'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className='sr-only'>Enable dark theme</span>

      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </SwitchComponent>
  )
}
