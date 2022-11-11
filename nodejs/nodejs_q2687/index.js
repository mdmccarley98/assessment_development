import axios from 'axios'


const sendRequest =async () => {
  const endpoint = 'https://api-uat.corelogic.asia/sandbox/property/'
  const path = 'au/v1/property/41345938.json?returnFields=address,attributes,coordinate'
  try {
    const response = await axios.get(endpoint + path, {
      // headers: {
      //   Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDUlQiLCJNQVAiLCJQVFkiLCJTR1QiLCJTVFMiLCJUVEwiXSwicm9sZXMiOltdLCJpc3MiOiJodHRwczovL2FjY2Vzcy1hcGkuY29yZWxvZ2ljLmFzaWEiLCJlbnZfYWNjZXNzX3Jlc3RyaWN0Ijp0cnVlLCJleHAiOjE2NTE1MDcyMzEsImdlb19jb2RlcyI6WyJBQ1QgLSBGdWxsIFN0YXRlIiwiTlNXIC0gTWV0cm8iLCJOU1cgLSBSZWdpb25hbCIsIk5UIC0gRnVsbCBTdGF0ZSIsIlFMRCAtIE1ldHJvIiwiUUxEIC0gUmVnaW9uYWwiLCJTQSAtIE1ldHJvIiwiU0EgLSBSZWdpb25hbCIsIlRBUyAtIEZ1bGwgU3RhdGUiLCJWSUMgLSAoQUEpIEZ1bGwgU3RhdGUiLCJWSUMgLSBGdWxsIFN0YXRlIiwiVklDIC0gTWV0cm8iLCJWSUMgLSBSZWdpb25hbCIsIldBIC0gTWV0cm8iLCJXQSAtIFJlZ2lvbmFsIiwiTm9ydGggSXNsYW5kIiwiU291dGggSXNsYW5kIl0sImNsaWVudF9pZCI6ImlDYnA3QVJhVkhlZmU2UnFwcVI5ZWJpdFhBMDgzUlB0Iiwic291cmNlX2V4Y2x1c2lvbiI6W119.bj8EXZLIGJIh8H6uCPxkWThzSU1fzC1qb6ix5bhyflWHnRIbiHYVuOqFVhTXFa2nxTpEi9p882z1hflXPuPD5EKgYjj5TawWDVcNxI4FjfcuSLTzOueCQyxWG5_yTS3BrfVdY8pNqjdXEnPspgg3y9rSexreN758N1GMFNe-hxU"
      // },
    });
    console.log( response)
  } catch(err) {
    console.log('error', err)
  }
}
sendRequest()
