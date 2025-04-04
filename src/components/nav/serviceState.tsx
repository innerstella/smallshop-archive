import { TabNav } from "@radix-ui/themes"
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
    <TabNav.Root color="orange">
      {SERVICE_STATE_LIST.map((state, idx) => {
        return (
          <TabNav.Link
            key={idx}
            active={serviceState === state}
            onClick={() => setServiceState(state)}
          >
            {state}
          </TabNav.Link>
        )
      })}
    </TabNav.Root>
  )
}
