'use client'

export default function FeedPage() {
	return (
		<div className='m-10 flex flex-col gap-4'>
			<div className='m-10 flex gap-4 text-dark-500'>
				<div className='h-32 w-32 bg-amber-300 p-1'>Post 1</div>
				<div className='h-32 w-32 bg-red-300 p-1'>Post 2</div>
				<div className='h-32 w-32 bg-gray-300 p-1'>Post 3</div>
				<div className='h-32 w-32 bg-cyan-300 p-1'>Post 4</div>
			</div>
		</div>
	)
}