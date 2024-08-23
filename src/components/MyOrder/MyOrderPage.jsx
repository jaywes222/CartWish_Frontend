import React from 'react';
import useData from './../../Hooks/useData';
import Table from './../Common/Table';
import Loader from '../Common/Loader';

const MyOrderPage = () => {
    const { data: orders, error, isLoading } = useData('/order');
    const getProductString = order => {
        const productStringArr = order.products.map(p => `${p.product.title}(${p.quantity})`)

        return productStringArr.join(",")
    }
	return (
		<>
			<section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-8 px-6">
                <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
                {isLoading && <Loader />}
                {error && <em className='form_error text-xt text-red-500'>{error}</em>}
				{orders && (
					<Table headings={['Order', 'Products', 'Total', 'Status']}>
						<tbody>
							{orders.map((order, index) => (
								<tr
									key={order._id}
									className="border-b border-gray-200"
								>
                                    <td className="py-3 px-4 text-center">{index + 1}</td>
									<td className="py-3 px-4 text-center">
										{getProductString(order)}
									</td>
									<td className="py-3 px-4 text-center">
										${order.total}
									</td>
									<td className="py-3 px-4 text-center">
										{order.status}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</section>
		</>
	);
};

export default MyOrderPage;
