import { expect } from "chai";
import { describe } from "mocha";
import { ListOfHands } from "../../../src/ts/day7/listOfHands";

describe("Day7: List of Hands", () => {

    describe ("total winning", () => {
        it ( "should be 6440", () => {
            expect ( new ListOfHands (
                "32T3K 765\n"+
                "T55J5 684\n"+
                "KK677 28\n"+
                "KTJJT 220\n"+
                "QQQJA 483"
            ).getTotalWinnings()).to.be.equal(6440);
        })
    })

});