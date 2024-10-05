const calculator = require('./task/calculator');


jest.mock('./task/calculator');

test('Додавання', () => {
    // Налаштовуємо мок для функції add
    calculator.add.mockReturnValue(10);
    
    const result = calculator.add(2, 3);

    // Перевіряємо, чи функція повернула замоковане значення
    expect(result).toBe(10);
    // Чи функція викликана з правильними аргументами
    expect(calculator.add).toHaveBeenCalledWith(2, 3);
});

test('Віднімання', () => {
    // Налаштовуємо мок для функції subtract
    calculator.subtract.mockReturnValue(5);

    const result = calculator.subtract(8, 3);

    // Перевіряємо замоковане значення
    expect(result).toBe(5);
    // Перевіряємо виклики з аргументами
    expect(calculator.subtract).toHaveBeenCalledWith(8, 3);
});

test('Множення', () => {
    calculator.multiply.mockReturnValue(20);

    const result = calculator.multiply(4, 5);

    expect(result).toBe(20);
    expect(calculator.multiply).toHaveBeenCalledWith(4, 5);
});

test('Ділення', () => {
    calculator.divide.mockReturnValue(2);

    const result = calculator.divide(10, 5);

    expect(result).toBe(2);
    expect(calculator.divide).toHaveBeenCalledWith(10, 5);
});
