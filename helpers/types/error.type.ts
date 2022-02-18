import { AlertProps } from '@mui/material/Alert/Alert';

export interface ErrorStatus {
  has_response: boolean;
  status: string;
  severity?: AlertProps['severity'];
  message: string;
}
