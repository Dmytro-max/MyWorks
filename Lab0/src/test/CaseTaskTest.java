package test;

import lab0.Case;
import lab0.Direction;
import org.junit.jupiter.api.Test;


class CaseTaskTest {

    @Test
    void caseTask() {
        Assertions.assertEquals(Direction.NORTH, Case.caseTask(0));
    }
}