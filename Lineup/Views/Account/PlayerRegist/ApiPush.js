import {PlayerRegistApi} from './PlayerRegistApi'

import Amplify, {Storage} from 'aws-amplify'
import {GetUuid} from '../../../Components'
import awsconfig from '../../../src/aws-exports'

Amplify.configure(awsconfig)

Storage.configure({
  customPrefix: {
    public: '',
    protected: '',
    private: '',
  },
})

const fetchResourceFromURI = async uri => {
  const response = await fetch(uri)
  const blob = await response.blob()
  return blob
}

export async function ApiPush(photo, setPhoto, form, setForm) {
  // aws file push
  try {
    const img = await fetchResourceFromURI(photo.asset.uri)
    var path = `player-certificate/`
    return await Storage.put(path + GetUuid() + '.jpg', img, {
      level: 'public',
      contentType: 'photo',
    })
      .then(res => {
        Storage.get(res.key)
          .then(result => {
            var temp = form
            const url = result.split('?')[0]
            temp[`certificate`] = url
            setPhoto({
              ...photo,
              ['uri']: result,
            })
            setForm({...form, [`certificate`]: url})
            PlayerRegistApi(temp)
            return url[0]
          })
      })
  } catch {
      console.log('eer1', err)
  }
}
