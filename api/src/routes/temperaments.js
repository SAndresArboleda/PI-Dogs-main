const getTemperament = async (req, res) => {

}
const postTemperament = async (req, res) => {

}
const insertDataApi = async (req, res) => {
    try {
        const data = await getApiData()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}