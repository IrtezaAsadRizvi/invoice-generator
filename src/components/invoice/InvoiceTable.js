const InvoiceTable = ({ invoiceData }) => {
    return (
        <section className="grid grid-cols-2">
            <table className="table-auto col-span-2">
                <thead>
                    <tr>
                        <th className="text-left">Description</th>
                        <th className="text-left">Rate</th>
                        <th className="text-left">Quantity</th>
                        <th className="text-left">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.items.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="grid col-span-3">
                                <TextInput
                                    className="mt-2"
                                    value={item.description}
                                    placeholder="e.g. john@example.com"
                                    onInput={(value) => { }}
                                />
                            </td>
                            <td>
                                <TextInput
                                    className="mt-2"
                                    value={item.unit_cost}
                                    placeholder="0"
                                    onInput={(value) => { }}
                                />
                            </td>
                            <td>
                                <TextInput
                                    className="mt-2"
                                    value={item.quantity}
                                    placeholder="0"
                                    onInput={(value) => { }}
                                />
                            </td>
                            <td>
                                <TextInput
                                    className="mt-2"
                                    value={item.unit_cost * item.quantity}
                                    disabled
                                    placeholder="0"
                                    onInput={(value) => { }}
                                />
                            </td>
                        </tr>
                    ))}
                    <tr className="font-semibold">
                        <td></td>
                        <td></td>
                        <td className="text-right pr-2">Sub Total:</td>
                        <td>
                            {invoiceData.items.reduce(
                                (acc, item) => acc + parseFloat(item.unit_cost) * parseInt(item.quantity),
                                0
                            )}
                        </td>
                    </tr>
                    <tr className="font-semibold">
                        <td></td>
                        <td></td>
                        <td className="text-right pr-2">Tax:</td>
                        <td>
                            {invoiceData.items.reduce(
                                (acc, item) => acc + parseFloat(item.unit_cost) * parseInt(item.quantity),
                                0
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default InvoiceTable
