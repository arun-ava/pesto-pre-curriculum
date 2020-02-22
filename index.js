const invalidInputErrortMessage = "Invalid Input";
const divisionByZeroErrortMessage = "Division by 0 is not allowed";

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function add(a, b) {
	if(isNaN(a) || isNaN(b)){
		throw invalidInputErrortMessage;
	}
  return a + b;
}

function subtract(a, b) {
	if(isNaN(a) || isNaN(b)){
		throw invalidInputErrortMessage;
	}
  return a - b;
}

function multiply(a, b) {
	if(isNaN(a) || isNaN(b)){
		throw invalidInputErrortMessage;
	}
  return a * b;
}

function divide(numerator, denominator) {
	if(isNaN(numerator) || isNaN(denominator)){
		throw invalidInputErrortMessage;
	} else if(denominator === 0){
		throw divisionByZeroErrortMessage;
	}
  return numerator / denominator;
}

describe('add', () => {
	it('throws exception if non-number is given as an input', () => {
		try{
			const result = add("a", 2);
		} catch(err){
			expect(err).toBe(invalidInputErrortMessage);
		}
			
		
	});
  it('adds two numbers', () => {
	  try {
			const result = add(1, 2)
			expect(result).toBe(3)
		} catch(err){
				console.log(err);
		}
  });
});

describe('subtract', () => {
	it('throws exception if non-number is given as an input', () => {
		try{
			const result = subtract("a", 2);
		} catch(err){
			expect(err).toBe(invalidInputErrortMessage);
		}
			
		
	});
  it('subtracts second number from first', () => {
	  try {
			expect(subtract(2, 2)).toBe(0);
			expect(subtract(2, 4)).toBe(-2);
			expect(subtract(4, 2)).toBe(2);
			expect(subtract(-1, -3)).toBe(2);
		} catch(err){
				console.log(err);
		}
  });
});


describe('multiply', () => {
	it('throws exception if non-number is given as an input', () => {
		try{
			const result = subtract("a", 2);
		} catch(err){
			expect(err).toBe(invalidInputErrortMessage);
		}
			
		
	});
  it('multiplies two numbers', () => {
	  try {
			expect(multiply(2, 2)).toBe(4);
			expect(multiply(2, 0)).toBe(0);
			expect(multiply(-2, 0)).toBe(0);
			expect(multiply(-2, -2)).toBe(4);
			expect(multiply(-2, 2)).toBe(-4);
		} catch(err){
				console.log(err);
		}
  });
});


describe('divide', () => {
	it('throws exception if non-number is given as an input', () => {
		try{
			const result = divide("a", 2);
		} catch(err){
			expect(err).toBe(invalidInputErrortMessage);
		}
			
		
	});
	
	it('throws exception if denominator is 0', () => {
		try{
			const result = divide(2, 0);
		} catch(err){
			expect(err).toBe(divisionByZeroErrortMessage);
		}
			
		
	});
	
	
  it('divides first number by second number', () => {
	  try {
			expect(divide(2, 2)).toBe(1);
			expect(divide(0, 4)).toBe(0);
			expect(divide(0, -2)).toBe(0);
			expect(divide(-2, -2)).toBe(1);
			expect(divide(5, 2)).toBe(2.5);
		} catch(err){
			console.log(err);
		}
  });
});

module.exports = {
  describe,
  expect,
  it,
  matchers,
  divisionByZeroErrortMessage,
  invalidInputErrortMessage  
}

