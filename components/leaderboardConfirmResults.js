import {
  Button,
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Paper,
} from "@mui/material";
import { useFirestore } from "../context/firestoreContext";
import { useState } from "react";
import { collection, getDocs, doc, addDoc } from "firebase/firestore/lite";

export default function LeaderboardConfirmResults(props) {
  const [playerInitials, setPlayerInitials] = useState("");

  const { db } = useFirestore();

  const handleTextFieldChange = () => (event) => {
    setPlayerInitials(event.target.value);
  };

  async function addUserScore() {
    const leaderboardCol = collection(db, "leaderboard");
    await addDoc(leaderboardCol, {
      name: playerInitials,
      score: props.userScore,
    });
    props.showBoard(true);
  }

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader title={"Your Results"} />
      <CardContent>
        <div style={{ margin: "2% 0" }}>
          Enter your initals to see how you compared to other players!
        </div>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    value={playerInitials}
                    onChange={handleTextFieldChange()}
                    label="Player Initials"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{props.userScore}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          sx={{ marginTop: "2%" }}
          variant="outlined"
          onClick={addUserScore}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
