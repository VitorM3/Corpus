import ReportTable from "../../core/components/Reports/ReportTable";
import ReportHeader from "../../core/components/Reports/ReportHeader";
import * as S from "../../core/components/Reports/styles";
import { useEffect, useState } from "react";

import api from "../../services/api";
// import { Appointment } from "../../types";

const Consultas = () => {
  const [appointment, setAppointment] = useState<appointment[]>([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const { data } = await api.get("/attendances");
        setAppointment(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendances();
  }, []);

  return (
    <S.Container>
      <ReportHeader />
      <ReportTable attendances={appointment} />
    </S.Container>
  );
};

export default Consultas;
