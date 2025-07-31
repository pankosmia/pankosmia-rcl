import { doI18n, i18nContext } from 'pithekos-lib'
import { useContext } from 'react';

export default function MiComponente({ name, datosDelServidor }) {
  const { i18nRef } = useContext(i18nContext);
  return (
    <>
    <h1>{doI18n("pages:content:greeting", i18nRef.current)} {name}</h1>
    <ul>
        {datosDelServidor.map((dato) => (
          <li key={dato.id}>{dato.name}</li>
        ))}
    </ul>
    </>
  )
}
