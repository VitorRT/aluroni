import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames'

type IOp = typeof filtros[0]

interface Props {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props) {

    function selecionarFiltros(op : IOp) {
        if(filtro === op.id) return setFiltro(null)
        return setFiltro(op.id)
    }

    return (
        <>
            <div className={styles.filtros}>
                {filtros.map(op => (
                    <button key={op.id} onClick={() => selecionarFiltros(op)} className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']] : filtro === op.id
                    })} >
                        {op.label}
                    </button>
                ))}
            </div>
        </>
    )
}