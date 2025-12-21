import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center font-bold">Página não encontrada!</h1>
      <p>A página que você tentou acessar não existe!</p>

      <Link href="/">Voltar</Link>
    </div>
  );
}
