import { Select } from "@radix-ui/themes"
import { SERVICE_STATE_LIST } from "../../constants/service"
import { ServiceStateType } from "../../types/service.type"
import { Dispatch, SetStateAction } from "react"

interface ServiceStateNavProps {
  serviceState: ServiceStateType
  setServiceState: Dispatch<SetStateAction<ServiceStateType>>
}

export const ServiceStateNav = ({
  serviceState,
  setServiceState,
}: ServiceStateNavProps) => {
  return (
    <Select.Root
      defaultValue={serviceState}
      onValueChange={(value) => setServiceState(value as ServiceStateType)}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          {SERVICE_STATE_LIST.map((state, idx) => {
            return (
              <Select.Item
                key={idx}
                value={state}
                // onClick={(e) => setServiceState(e.target.value)}
              >
                {state}
              </Select.Item>
            )
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
