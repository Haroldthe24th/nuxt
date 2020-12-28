import dbConnect from "../../utils/dbConnect"

dbConnect();

export default async (req, res) => {
    res.json({ test: "test" });

    switch (method) {
        case "GET":
            try {
                const note = await Note.findById(id)
                if (!note)
                    return res.status(400).json({ success: false })

                return res.status(200).json({ success: true, data: note })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "PUT":
            try {
                const note = await Note.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                //201 =>something was created
                if (!note)
                    return res.status(400).json({ success: false })

                return res.status(200).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "DELETE":
            try {
                const deletedNote = await Note.deleteOne({ _id: id })
                //201 =>something was created
                if (!deletedNote)
                    return res.status(400).json({ success: false })

                return res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}
