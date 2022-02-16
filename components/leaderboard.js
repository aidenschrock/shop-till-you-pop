import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField,
  Paper,
  Button,
} from "@mui/material";

import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { useFirestore } from "../context/firestoreContext";

export default function Leaderboard(props) {
  const [leaderboardArray, setLeaderboardArray] = useState([]);

  const { db } = useFirestore();

  useEffect(() => {
    async function getLeaderboard() {
      const leaderboardCol = collection(db, "leaderboard");
      const leaderboardSnapshot = await getDocs(leaderboardCol);
      const leaderboardList = leaderboardSnapshot.docs.map((doc) => doc.data());
      setLeaderboardArray(leaderboardList);
    }
    getLeaderboard();
  }, []);

  return (
    <Card>
      <CardHeader title={"Leaderboard"} />
      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="Leaderboard Table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboardArray
                ? leaderboardArray.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>

                      <TableCell>{row.score}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
