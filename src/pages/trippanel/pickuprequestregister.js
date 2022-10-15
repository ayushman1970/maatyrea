import "./pickuprequestregister.css";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  state,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { Toaster, toast } from "react-hot-toast";

export const PickupRequestRegister = () => {
  const [pickuprequests, setPickupRequests] = useState([]);
  const pickuprequestCollectionRef = collection(db, "Pickup Request");

  const [assignedTo, setAssignedTo] = useState();
  const [status] = useState("Assigned");

  const updateAssignedTo = async (idprn) => {
    const pickuprequestref = doc(db, "Pickup Request", idprn);

    updateDoc(pickuprequestref, {
      AssignedTo: assignedTo,
      Status: status,
    }).then(function () {
      toast.success("Assigned Successfully !!");
    });
  };

  useEffect(() => {
    const getPickupRequests = async () => {
      const data = await getDocs(pickuprequestCollectionRef);
      setPickupRequests(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPickupRequests();
  }, []);

  return (
    <div>
      <div className="heading">
        <h2>Pickup Requests</h2>
      </div>

      <div style={{ marginTop: "20px" }}>
        <table className="styled-table">
          <thead nowrap="nowrap">
            <tr className="thead">
              <th style={{ textAlign: "center" }}>PR&nbsp;No.</th>
              <th style={{ textAlign: "center" }}>Fleet&nbsp;Name</th>
              <th style={{ textAlign: "center" }}>Pickup&nbsp;Site</th>
              <th style={{ textAlign: "center" }}>
                Tentative Pickup&nbsp;Date
              </th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Assigned&nbsp;To</th>
              <th style={{ textAlign: "center" }}>
                Assign&nbsp;Pickup&nbsp;to
              </th>
              <th style={{ textAlign: "center" }}>Action</th>
              <th style={{ textAlign: "center" }}>
                Request&nbsp;Date&nbsp;Time
              </th>
              <th style={{ textAlign: "center" }}>TS&nbsp;1</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;1</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;2</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;2</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;3</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;3</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;4</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;4</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;5</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;5</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;6</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;6</th>
            </tr>
          </thead>
          <tbody>
            {pickuprequests.map((pickuprequest) => {
              if (pickuprequest.Status !== "Trip Started" && pickuprequest.Status !== "Trip Ended" && pickuprequest.FleetName !== undefined) {
                return (
                  <tr key={pickuprequest.PickupRequestNumber}>
                    <td>{pickuprequest.PickupRequestNumber}</td>
                    <td>{pickuprequest.FleetName}</td>
                    <td>{pickuprequest.PickupSite}</td>
                    <td>
                      {pickuprequest.TentativePickupDate +
                        " " +
                        pickuprequest.TentativePickupTime}
                    </td>
                    <td>{pickuprequest.Status}</td>
                    <td>{pickuprequest.AssignedTo}</td>
                    <td>
                      <input
                        className="inputdetails"
                        placeholder="Assign To"
                        onChange={(event) => {
                          setAssignedTo(event.target.value);
                        }}
                      ></input>
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="assignbtn"
                        onClick={() =>
                          updateAssignedTo(
                            pickuprequest.PickupRequestNumber +
                              pickuprequest.FleetName
                          )
                        }
                      >
                        ASSIGN
                      </button>
                    </td>
                    <td>
                      {pickuprequest.RequestDate +
                        " " +
                        pickuprequest.RequestTime}
                    </td>
                    <td>{pickuprequest.TyreSize1}</td>
                    <td>{pickuprequest.TyreQuantity1}</td>
                    <td>{pickuprequest.TyreSize2}</td>
                    <td>{pickuprequest.TyreQuantity2}</td>
                    <td>{pickuprequest.TyreSize3}</td>
                    <td>{pickuprequest.TyreQuantity3}</td>
                    <td>{pickuprequest.TyreSize4}</td>
                    <td>{pickuprequest.TyreQuantity4}</td>
                    <td>{pickuprequest.TyreSize5}</td>
                    <td>{pickuprequest.TyreQuantity5}</td>
                    <td>{pickuprequest.TyreSize6}</td>
                    <td>{pickuprequest.TyreQuantity6}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div>
          <Toaster />
        </div>
      </div>
            <div><h2>OnGoing Trips</h2></div>
      <div style={{ marginTop: "20px" }}>
        <table className="styled-table">
          <thead nowrap="nowrap">
            <tr className="thead">
              <th style={{ textAlign: "center" }}>PR&nbsp;No.</th>
              <th style={{ textAlign: "center" }}>Fleet&nbsp;Name</th>
              <th style={{ textAlign: "center" }}>Pickup&nbsp;Site</th>
              <th style={{ textAlign: "center" }}>
                Tentative Pickup&nbsp;Date
              </th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Assigned&nbsp;To</th>
              
              <th style={{ textAlign: "center" }}>
                Request&nbsp;Date&nbsp;Time
              </th>
              <th style={{ textAlign: "center" }}>TS&nbsp;1</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;1</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;2</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;2</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;3</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;3</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;4</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;4</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;5</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;5</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;6</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;6</th>
            </tr>
          </thead>
          <tbody>
            {pickuprequests.map((pickuprequest) => {
              if (pickuprequest.Status === "Trip Started" && pickuprequest.FleetName !== undefined) {
                return (
                  <tr key={pickuprequest.PickupRequestNumber}>
                    <td>{pickuprequest.PickupRequestNumber}</td>
                    <td>{pickuprequest.FleetName}</td>
                    <td>{pickuprequest.PickupSite}</td>
                    <td>
                      {pickuprequest.TentativePickupDate +
                        " " +
                        pickuprequest.TentativePickupTime}
                    </td>
                    <td>{pickuprequest.Status}</td>
                    <td>{pickuprequest.AssignedTo}</td>
                   
                    <td>
                      {pickuprequest.RequestDate +
                        " " +
                        pickuprequest.RequestTime}
                    </td>
                    <td>{pickuprequest.TyreSize1}</td>
                    <td>{pickuprequest.TyreQuantity1}</td>
                    <td>{pickuprequest.TyreSize2}</td>
                    <td>{pickuprequest.TyreQuantity2}</td>
                    <td>{pickuprequest.TyreSize3}</td>
                    <td>{pickuprequest.TyreQuantity3}</td>
                    <td>{pickuprequest.TyreSize4}</td>
                    <td>{pickuprequest.TyreQuantity4}</td>
                    <td>{pickuprequest.TyreSize5}</td>
                    <td>{pickuprequest.TyreQuantity5}</td>
                    <td>{pickuprequest.TyreSize6}</td>
                    <td>{pickuprequest.TyreQuantity6}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div>
          <Toaster />
        </div>
      </div>

            <div style={{ marginTop: "20px" }}>
              <div className="heading" style={{ marginBottom: "10px" }}><h2>Completed Requests</h2></div>
            <table className="styled-table">
          <thead nowrap="nowrap">
            <tr className="thead">
              <th style={{ textAlign: "center" }}>PR&nbsp;No.</th>
              <th style={{ textAlign: "center" }}>Fleet&nbsp;Name</th>
              <th style={{ textAlign: "center" }}>Pickup&nbsp;Site</th>
              <th style={{ textAlign: "center" }}>
                Tentative Pickup&nbsp;Date
              </th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Assigned&nbsp;To</th>
              
              <th style={{ textAlign: "center" }}>
                Request&nbsp;Date&nbsp;Time
              </th>
              <th style={{ textAlign: "center" }}>TS&nbsp;1</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;1</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;2</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;2</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;3</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;3</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;4</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;4</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;5</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;5</th>
              <th style={{ textAlign: "center" }}>TS&nbsp;6</th>
              <th style={{ textAlign: "center" }}>TQ&nbsp;6</th>
            </tr>
          </thead>
          <tbody>
            {pickuprequests.map((pickuprequest) => {
              if (pickuprequest.Status ==="Trip Ended" && pickuprequest.FleetName !== undefined) {
                return (
                  <tr key={pickuprequest.PickupRequestNumber}>
                    <td>{pickuprequest.PickupRequestNumber}</td>
                    <td>{pickuprequest.FleetName}</td>
                    <td>{pickuprequest.PickupSite}</td>
                    <td>
                      {pickuprequest.TentativePickupDate +
                        " " +
                        pickuprequest.TentativePickupTime}
                    </td>
                    <td>{pickuprequest.Status}</td>
                    <td>{pickuprequest.AssignedTo}</td>
                    
                    
                    <td>
                      {pickuprequest.RequestDate +
                        " " +
                        pickuprequest.RequestTime}
                    </td>
                    <td>{pickuprequest.TyreSize1}</td>
                    <td>{pickuprequest.TyreQuantity1}</td>
                    <td>{pickuprequest.TyreSize2}</td>
                    <td>{pickuprequest.TyreQuantity2}</td>
                    <td>{pickuprequest.TyreSize3}</td>
                    <td>{pickuprequest.TyreQuantity3}</td>
                    <td>{pickuprequest.TyreSize4}</td>
                    <td>{pickuprequest.TyreQuantity4}</td>
                    <td>{pickuprequest.TyreSize5}</td>
                    <td>{pickuprequest.TyreQuantity5}</td>
                    <td>{pickuprequest.TyreSize6}</td>
                    <td>{pickuprequest.TyreQuantity6}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
            </div>

    </div>
  );
};
