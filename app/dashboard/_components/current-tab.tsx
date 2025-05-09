import Image from "next/image";
import CurrentOrder from "./Current";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CurrentTab = ({ data }: any) => {
  return (
    <div className="w-full">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableCell className="w-[40px]">
              <input
                className="order-checkbox"
                title="checkbox"
                name="checkbox"
                type="checkbox"
              />
            </TableCell>
            <TableCell className="min-w-[120px]">
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Order ID</p>
                <button title="Id_button" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell className="min-w-[150px]">
              <div className="flex items-center">
                <p className="text-sm font-semibold">C. Name</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[100px]">
              <div className="flex items-center">
                <p className="text-sm font-semibold">Pick-Up</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[100px]">
              <div className="flex items-center">
                <p className="text-sm font-semibold">Amount</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[100px]">
              <div className="flex items-center">
                <p className="text-sm font-semibold">Distance</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[120px]">
              <div className="flex items-center">
                <div>
                  <p className="text-sm font-semibold">Order Placed</p>
                </div>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[120px]">
              <div className="flex items-center">
                <div>
                  <p className="text-sm font-semibold">Req. Pick-up Time</p>
                </div>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[120px]">
              <div className="flex items-center">
                <div>
                  <p className="text-sm font-semibold">Req. Delivery Time</p>
                </div>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[100px]">
              <div>
                <p className="text-sm font-semibold">Pick-up Ready</p>
              </div>
            </TableCell>

            <TableCell className="min-w-[120px]">
              <div className="flex items-center">
                <p className="text-sm font-semibold">Driver</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[100px]">
              <div className="flex items-center">
                <p className="text-sm font-semibold">Status</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>

            <TableCell className="min-w-[100px]">
              <p className="text-sm font-semibold">Tracking</p>
            </TableCell>
          </TableRow>
        </TableHeader>
        {data.length > 0 && (
          <TableBody>
            {data.map((order: any) => (
              <CurrentOrder key={order._id} data={order} />
            ))}
          </TableBody>
        )}
      </Table>
      {data.length == 0 && (
        <div className="w-full flex flex-col items-center justify-center my-10">
          <Image
            src="/images/pending2.png"
            alt="Pending logo"
            width={200}
            height={200}
          />
          <p className="text-lg font-light">You Currently Have No Orders</p>
        </div>
      )}
    </div>
  );
};

export default CurrentTab;