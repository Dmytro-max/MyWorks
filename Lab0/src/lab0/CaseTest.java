package lab0;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CaseTest {

    @Test
    void caseTask() {
        assertEquals(Direction.NORTH, Case.caseTask(0));
    }
}