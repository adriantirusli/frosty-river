import JsonToForm from 'json-reactform'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Breadcrumb from '../features/create/components/Breadcrumb'
import { formCreate } from '../features/create/components/Form/formCreate'
import { addComodity } from '../features/create/state/formReducer'
import './styles.scss'

function Create() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (params) => {
    const timestamp = new Date().getTime()
    const parsedDate = new Date().toISOString()
    const newComodity = {
      uuid: uuidv4(),
      area_kota: params.Kota.value,
      area_provinsi: params.Provinsi.value,
      komoditas: params.Komoditas,
      size: params.Ukuran,
      price: params.Harga,
      timestamp: timestamp,
      tgl_parsed: parsedDate,
    }

    dispatch(addComodity(newComodity))
    navigate('/')
  }

  const currentBreadcrumb = [{ label: 'Beranda', link: '/' }, { label: 'Tambah Komoditas' }]

  return (
    <div className="container mt-5">
      <Breadcrumb navs={currentBreadcrumb} />
      <h1 className="mb-4 title-create">Tambah Komoditas</h1>
      <hr className="solid mb-4" />
      <div className="px-5">
        <JsonToForm model={formCreate} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Create
