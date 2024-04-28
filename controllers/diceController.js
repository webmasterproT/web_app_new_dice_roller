const diceModel = require('../models/diceModel');

exports.rollDice = async (req, res) => {
    try {
        const { numberOfDice, diceType, modifier } = req.body;
        let results = [];
        let total = 0;

        for (let i = 0; i < numberOfDice; i++) {
            const roll = Math.floor(Math.random() * diceType) + 1;
            total += roll;
            results.push(roll);
        }

        total += modifier;

        // Save the roll to the database
        const newRoll = await diceModel.create({
            diceType,
            numberOfDice,
            modifier,
            results,
            total,
            timestamp: new Date()
        });

        // Respond with the roll results
        res.status(200).json({
            status: 'success',
            data: {
                rollId: newRoll.id,
                results,
                total,
                timestamp: newRoll.timestamp
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while rolling the dice.'
        });
    }
};

exports.getRollHistory = async (req, res) => {
    try {
        const rollHistory = await diceModel.findAll({
            order: [['timestamp', 'DESC']]
        });

        res.status(200).json({
            status: 'success',
            data: rollHistory
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while retrieving the roll history.'
        });
    }
};

exports.exportRollHistoryToPDF = async (req, res) => {
    // This function would include logic to generate a PDF from the roll history.
    // For simplicity, it's not fully implemented here.
    res.status(501).json({
        status: 'not implemented',
        message: 'This feature is not yet implemented.'
    });
};