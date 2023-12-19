import { expect } from "chai";
import { describe } from "mocha";
import { Mapping } from "../../../src/ts/day5/mapping";
import { SingleMap } from "../../../src/ts/day5/singleMap";

describe ("day 5: mapping", () => {
    let testee = new Mapping ( 
        "10 0 2\n"+
        "100 10 20\n"+
        "500 1000 10\n"+
        "600 500 100"
    );

    [31, 32, 600, 999].forEach ( (source: number) => {
        it( source + " should map to itself", () => {
            expect ( testee.map ( source )).to.be.equal ( source );
        })
    });

    [
        [0, 10],
        [1, 11],
        [10, 100],
        [29, 119],
        [1000, 500],
        [550, 650],
    ].forEach((expectedMapping: number[]) => {
        it ( expectedMapping[0] + " should map to " + expectedMapping[1], () => {
            expect( testee.map(expectedMapping[0])).to.be.equal(expectedMapping[1]);
        })
    });

    describe ( "findMapFor", () => {
        it ( "should return the correct single map", () => {
            expect ( testee.findMapFor ( 25 )).to.be.deep.equal ( new SingleMap(10, 100, 20));
        })

        it ( "should return an intermediate identity mapping", () => {
            expect ( testee.findMapFor ( 45 )).to.be.deep.equal(
                new SingleMap(30, 30, 499-30+1)
            );
        })

        it ( "should return an additional identity mapping with asked number as end", () => {
            expect ( testee.findMapFor ( 1200 )).to.be.deep.equal(
                new SingleMap(1010, 1010, 191)
            );
        })

        it ( "should return an identity mapping from 0 to the start of the mappings", () => {
            expect ( new Mapping("10 10 10").findMapFor(1)).to.be.deep.equal( new SingleMap (0,0,10));

        })
    })

})