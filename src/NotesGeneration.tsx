function GenerateSequence()
{
var sequenceLength = 5;

  var generatedSequence: [[string], number] = [["A3"], 1];

  for (let len = 0; len < sequenceLength; len++) 
  {
    let random = GetRandomInt(5)

    switch (random) {
      case 0: {
        generatedSequence.push(["A3"], 1);
        break;
      }
      case 1: {
        generatedSequence.push(["C3"], 1);
        break;
      }
      case 2: {
        generatedSequence.push(["D3"], 1);
        break;
      }
      case 3: {
        generatedSequence.push(["E3"], 1);
        break;
      }
      case 4: {
        generatedSequence.push(["G3"], 1);
        break;
      }
      default:
        generatedSequence.push(["A3"], 1)
        break;
    }
  }

  return generatedSequence;
}

export default GenerateSequence;

function GetRandomInt(max) {
  return Math.floor(Math.random() * max);
}