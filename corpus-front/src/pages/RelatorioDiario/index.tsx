import ReportTable from "../../core/components/Reports/ReportTable";
import ReportHeader from "../../core/components/Reports/ReportHeader";
import * as S from "../../core/components/Reports/styles";
import { useEffect, useState } from "react";

import api from "../../services/api";
import { Attendance } from "../../types";

const RelatorioDiario = () => {
  const [attendances, setAttendances] = useState<Attendance[]>([])

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const { data } = await api.get('/attendances')
        setAttendances(data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAttendances()
  }, [])

  return (
    <S.Container>
      <ReportHeader />
      <ReportTable attendances={attendances}/>
    </S.Container>
  );
};

export default RelatorioDiario;
