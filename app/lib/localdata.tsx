import path from 'path'
import fsPromises from 'fs/promises'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/data.json')
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as json
  const objectData = JSON.parse(jsonData.toString())

  return objectData
}