import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUserData } from "./hooks/useUserData";
import "./App.css";

function App() {
  const { data } = useUserData();

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 740 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((userData) => (
            <TableRow key={userData.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{userData.id}</TableCell>
              <TableCell>{userData.name}</TableCell>
              <TableCell>{userData.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
