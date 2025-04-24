import { Sidebar } from '@/components/sidebar'

export default async function Home() {
	return (
		<div className='container mx-auto flex px-4 py-8'>
			<Sidebar />
			<div className='m-10 flex flex-col gap-4'>
				<div>Counter</div>
				<div className='m-10 flex gap-4'>
					<div className='h-32 w-32 bg-amber-300'>Post 1</div>
					<div className='h-32 w-32 bg-red-300'>Post 2</div>
					<div className='h-32 w-32 bg-gray-300'>Post 3</div>
					<div className='h-32 w-32 bg-cyan-300'>Post 4</div>
				</div>
			</div>
		</div>
	)
}
