function compose<T, U, V>(
	f: (x: T) => U,
	g: (y: U) => V
): (x: T) => V {
	return x => g(f(x))
}

function arrayify<T>(x: T): T[] {
	return [x];
}

type Box<U> = { value: U }
function boxify<U>(y: U): Box<U> {
	return { value: y };
}

let newFn = compose(arrayify, boxify);
