/*=============================================================================================*/
/*Index em attendence*/
CREATE NONCLUSTERED INDEX idx_attendance_description
ON attendance (description);

/*=============================================================================================*/
/*Index em user*/
CREATE NONCLUSTERED INDEX idx_user_name
ON "user" (name);

CREATE NONCLUSTERED INDEX idx_user_name_email_cpf
ON "user" (name, email, cpf);

/*=============================================================================================*/
/*Index em employee*/

CREATE NONCLUSTERED INDEX idx_employee_access_code
ON employee (access_code);

/*=============================================================================================*/
/*Index em pacient*/

CREATE NONCLUSTERED INDEX idx_pacient_info
ON pacient (phone, phone_alternative, sus_code, unimed_code, created_at);