import { SHOP_NAME } from "@/constants"

export const Footer = () => {
    return (
        <footer className="flex border-t justify-between font-medium p-6">
            <div className="flex items-center gap-2">
                <p>
                    {SHOP_NAME}, the best shop.
                </p>
            </div>
        </footer>
    )
}