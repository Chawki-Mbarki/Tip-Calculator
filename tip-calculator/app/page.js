import PanelLayout from "./components/PanelLayouts"
import TipForm from "./components/TipForm"

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24">
         <h1 className="my-14 text-center text-3xl font-bold ippercase tracking-widest text-cyan-800">
          Tip Splitter
         </h1>

         <PanelLayout>
          <TipForm />
         </PanelLayout>
      </main>
    </div>
  )
}