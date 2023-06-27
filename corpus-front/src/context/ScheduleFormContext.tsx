import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { ScheduleFormBody } from "../types";

interface FormContextData {
  data: ScheduleFormBody | undefined;
  setFormValues: (values: ScheduleFormBody) => void;
}

const FormContext = createContext<FormContextData | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [data, setData] = useState<ScheduleFormBody | undefined>();

  useEffect(() => {
    console.log("data context =>", data);
  }, [data]);

  const setFormValues = (values: ScheduleFormBody) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const formContextValue: FormContextData = {
    data,
    setFormValues,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
}
