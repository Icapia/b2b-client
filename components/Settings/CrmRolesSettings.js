import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { ButtonClose, ButtonDefault, ButtonDelete } from "../Buttons/Buttons";

import { CloseModal } from "../CloseModal/CloseModal";
import Message from "../Messages/Message";
import { useState } from "react";

export default function CrmRolesSettings(props) {
  const [role, setRole] = useState(props.users);

  const handlerUpdate = (form) => {
    let roleId = parseInt(Object.entries(role).length + 1);
    form["id"] = roleId;
    props.onAdd(form);
    setRole({ ...role, [roleId]: form });
  };

  return (
    <div className="list topline mt-25">
      <h4>CRM Roles</h4>
      <div className="list__table">
        <div className="list__item list__item--header">
          <span className="w-1 a-l">Role Name</span>
          <span className="w-2 a-l">Role Description</span>
          <span className="w-1 a-r">Role Status</span>
          <span className="w-1 a-r">User Count</span>
        </div>
        {Object.entries(role).map((item, index) => {
          return (
            <div key={index} className="list__item">
              <h5 className="w-1 a-l">{item[1].roleName}</h5>
              <span className="w-2 a-l">{item[1].roleDesc}</span>
              <span className="w-1 a-r">
                {item[1].roleStatus == 1 ? "Active" : "Unactive"}
              </span>
              <span className="w-1 a-r">{0}</span>
            </div>
          );
        })}
      </div>
      <div className="listbtns mt-20">
        <AddRole onChange={(form) => handlerUpdate(form)} />
        <SelectRole
          roles={role}
          onChange={(form) => handlerUpdate(form)}
        ></SelectRole>
      </div>
    </div>
  );
}

const AddRole = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => {
    setOpen(false);
  };
  const handlerOpen = () => {
    setOpen(true);
  };

  const ModalBox = () => {
    const [form, setForm] = useState({
      roleName: "",
      roleStatus: 1,
      roleDesc: "",
      capability: {
        viewUser: false,
        frozzenUser: false,
        blockUser: false,
        deleteUser: false,
        viewCrmUser: false,
        frozzenCrmUser: false,
        blockCrmUser: false,
        deleteCrmUser: false,
        viewUserVer: false,
        acceptUserVer: false,
        devyUserVer: false,
        blockUserVer: false,
        viewChats: false,
        workChats: false,
        viewAnalytics: false,
        viewTotal: false,
      },
    });

    const [formButton, setFormButton] = useState(true);
    const [message, setMessage] = useState({
      className: "messageBox",
      message: "",
    });

    const handlerChange = (event) => {
      if (
        event.target.name == "roleName" ||
        event.target.name == "roleStatus" ||
        event.target.name == "roleDesc"
      ) {
        setForm({ ...form, [event.target.name]: event.target.value });
      } else {
        setForm({
          ...form,
          ...(form["capability"][event.target.name] = event.target.checked),
        });
      }

      if (form.roleName && form.roleDesc) {
        setFormButton(false);
      }
    };

    const handlerUpdate = () => {
      props.onChange({ ...form });
    };

    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Add New CRM Role</h2>
            <h5>Role Settings</h5>
            <div className="modal__content-form modal__content-form--fullw mxw-700 modal__content--roles">
              <FormGroup className="modal__content-formGroup col-2">
                <TextField
                  autoComplete={false}
                  className={"mt-20 flex-w"}
                  autoFocus={true}
                  focused={true}
                  name={"roleName"}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={"Role Name"}
                  placeholder={"Role name"}
                  onChange={(event) => handlerChange(event)}
                />

                <Box className={"flex-w mt-20"}>
                  <FormControl fullWidth>
                    <InputLabel>Role Status</InputLabel>
                    <Select
                      label="Role Status"
                      autoComplete={false}
                      className={"flex-w"}
                      focused={true}
                      defaultValue={1}
                    >
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={2}>Frozzen</MenuItem>
                      <MenuItem value={0}>Unactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  autoComplete={false}
                  className={"mt-20 flex-fw"}
                  fullWidth={true}
                  focused={true}
                  required={true}
                  multiline={true}
                  minRows={5}
                  name={"roleDesc"}
                  InputLabelProps={{ required: false }}
                  label={"Role Description"}
                  placeholder={"Work with Analytics"}
                  onChange={(event) => handlerChange(event)}
                />
              </FormGroup>

              <h4 className="h4 brown mt-40">Capability:</h4>
              <p className={"mt-10"}>
                Be careful when editing the capabilities of each role
              </p>
              <FormGroup className="mt-25 crmRoles-container">
                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Users</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewUser}
                        onChange={handlerChange}
                        name="viewUser"
                      />
                    }
                    label="Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.frozzenUser}
                        onChange={handlerChange}
                        name="frozzenUser"
                      />
                    }
                    label="Frozzen Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.blockUser}
                        onChange={handlerChange}
                        name="blockUser"
                      />
                    }
                    label="Block Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.deleteUser}
                        onChange={handlerChange}
                        name="deleteUser"
                      />
                    }
                    label="Delete Users"
                  />
                </FormControl>
                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Crm Users</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewCrmUser}
                        onChange={handlerChange}
                        name="viewCrmUser"
                      />
                    }
                    label="Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.frozzenCrmUser}
                        onChange={handlerChange}
                        name="frozzenCrmUser"
                      />
                    }
                    label="Frozzen Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.blockCrmUser}
                        onChange={handlerChange}
                        name="blockCrmUser"
                      />
                    }
                    label="Block Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.deleteCrmUser}
                        onChange={handlerChange}
                        name="deleteCrmUser"
                      />
                    }
                    label="Delete Users"
                  />
                </FormControl>

                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Verification</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewUserVer}
                        onChange={handlerChange}
                        name="viewUserVer"
                      />
                    }
                    label="View Verification Status"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.acceptUserVer}
                        onChange={handlerChange}
                        name="acceptUserVer"
                      />
                    }
                    label="Accept Verification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.devyUserVer}
                        onChange={handlerChange}
                        name="devyUserVer"
                      />
                    }
                    label="Deny Verification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.blockUserVer}
                        onChange={handlerChange}
                        name="blockUserVer"
                      />
                    }
                    label="Block User In Verification"
                  />
                </FormControl>

                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Chat Manager:</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewChats}
                        onChange={handlerChange}
                        name="viewChats"
                      />
                    }
                    label="View Chat manager"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.workChats}
                        onChange={handlerChange}
                        name="workChats"
                      />
                    }
                    label="Work in Chat manager"
                  />
                </FormControl>

                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Analytics:</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewAnalytics}
                        onChange={handlerChange}
                        name="viewAnalytics"
                      />
                    }
                    label="View Analytics"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewTotal}
                        onChange={handlerChange}
                        name="viewTotal"
                      />
                    }
                    label="View Total Earning"
                  />
                </FormControl>
              </FormGroup>
            </div>
            <ButtonDefault
              disabled={formButton}
              className="mr-15"
              onClick={handlerUpdate}
            >
              Add New Subscribe
            </ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
          <Message
            className={message.className}
            message={message.message}
          ></Message>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <ButtonDefault onClick={handlerOpen} className="mr-15">
        Add New Role
      </ButtonDefault>
      <ModalBox />
    </>
  );
};

const SelectRole = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => {
    setOpen(false);
  };
  const handlerOpen = () => {
    setOpen(true);
  };
  const roles = props.roles;

  const handlerUpdate = (form) => {
    props.onChange({ ...form });
  };

  const handlerDelete = (form) => {
    props.onDelete({ ...form });
  };

  const ModalBox = () => {
    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Subscribes Editing</h2>
            <div className="modal__content-form modal__content-form--fullw mxw-700">
              {Object.entries(roles).map((item, index) => {
                return (
                  <div className="selectSubscribe-item">
                    <div className="selectSubscribe-name">
                      <h4>{item[1].roleName}</h4>
                      <p>{item[1].roleDesc}</p>
                    </div>
                    <EditRole
                      onDelete={(form) => handlerDelete(form)}
                      onChange={(form) => handlerUpdate(form)}
                      role={item[1]}
                    />
                  </div>
                );
              })}
            </div>
            <ButtonDefault className="mr-15" onClick={handlerClose}>
              Update Subscribes
            </ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <ButtonDefault onClick={handlerOpen} className="mr-15">
        Edit Roles
      </ButtonDefault>
      <ModalBox />
    </>
  );
};

const EditRole = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => {
    setOpen(false);
  };
  const handlerOpen = () => {
    setOpen(true);
  };

  const currentRole = props.role;

  const ModalBox = () => {
    const [form, setForm] = useState(currentRole);
    const [message, setMessage] = useState({
      className: "messageBox",
      message: "",
    });

    const handlerChange = (event) => {
      if (
        event.target.name == "roleName" ||
        event.target.name == "roleStatus" ||
        event.target.name == "roleDesc"
      ) {
        setForm({ ...form, [event.target.name]: event.target.value });
      } else {
        setForm({
          ...form,
          ...(form["capability"][event.target.name] = event.target.checked),
        });
      }
    };

    const handlerUpdate = () => {
      props.onChange({ ...form });
    };

    const handlerDelete = () => {
      props.onDelete({ ...form });
    };

    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>
              Editing Role: <span className={"brown"}>{form.roleName}</span>
            </h2>
            <h5>Role Settings</h5>
            <div className="modal__content-form modal__content-form--fullw mxw-700 modal__content--roles">
              <FormGroup className="modal__content-formGroup col-2">
                <TextField
                  autoComplete={false}
                  className={"mt-20 flex-w"}
                  autoFocus={true}
                  defaultValue={form.roleName}
                  focused={true}
                  name={"roleName"}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={"Role Name"}
                  placeholder={"Role name"}
                  onChange={(event) => handlerChange(event)}
                />

                <Box className={"flex-w mt-20"}>
                  <FormControl fullWidth>
                    <InputLabel>Role Status</InputLabel>
                    <Select
                      label="Role Status"
                      autoComplete={false}
                      className={"flex-w"}
                      focused={true}
                      defaultValue={form.roleStatus}
                    >
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={2}>Frozzen</MenuItem>
                      <MenuItem value={0}>Unactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  autoComplete={false}
                  className={"mt-20 flex-fw"}
                  defaultValue={form.roleDesc}
                  fullWidth={true}
                  focused={true}
                  required={true}
                  multiline={true}
                  minRows={5}
                  name={"roleDesc"}
                  InputLabelProps={{ required: false }}
                  label={"Role Description"}
                  placeholder={"Work with Analytics"}
                  onChange={(event) => handlerChange(event)}
                />
              </FormGroup>

              <h4 className="h4 brown mt-40">Capability:</h4>
              <p className={"mt-10"}>
                Be careful when editing the capabilities of each role
              </p>
              <FormGroup className="mt-25 crmRoles-container">
                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Users</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewUser}
                        onChange={handlerChange}
                        name="viewUser"
                      />
                    }
                    label="Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.frozzenUser}
                        onChange={handlerChange}
                        name="frozzenUser"
                      />
                    }
                    label="Frozzen Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.blockUser}
                        onChange={handlerChange}
                        name="blockUser"
                      />
                    }
                    label="Block Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.deleteUser}
                        onChange={handlerChange}
                        name="deleteUser"
                      />
                    }
                    label="Delete Users"
                  />
                </FormControl>
                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Crm Users</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewCrmUser}
                        onChange={handlerChange}
                        name="viewCrmUser"
                      />
                    }
                    label="Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.frozzenCrmUser}
                        onChange={handlerChange}
                        name="frozzenCrmUser"
                      />
                    }
                    label="Frozzen Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.blockCrmUser}
                        onChange={handlerChange}
                        name="blockCrmUser"
                      />
                    }
                    label="Block Users"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.deleteCrmUser}
                        onChange={handlerChange}
                        name="deleteCrmUser"
                      />
                    }
                    label="Delete Users"
                  />
                </FormControl>

                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Verification</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewUserVer}
                        onChange={handlerChange}
                        name="viewUserVer"
                      />
                    }
                    label="View Verification Status"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.acceptUserVer}
                        onChange={handlerChange}
                        name="acceptUserVer"
                      />
                    }
                    label="Accept Verification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.devyUserVer}
                        onChange={handlerChange}
                        name="devyUserVer"
                      />
                    }
                    label="Deny Verification"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.blockUserVer}
                        onChange={handlerChange}
                        name="blockUserVer"
                      />
                    }
                    label="Block User In Verification"
                  />
                </FormControl>

                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Chat Manager:</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewChats}
                        onChange={handlerChange}
                        name="viewChats"
                      />
                    }
                    label="View Chat manager"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.workChats}
                        onChange={handlerChange}
                        name="workChats"
                      />
                    }
                    label="Work in Chat manager"
                  />
                </FormControl>

                <FormControl className={"crmRoles-group"}>
                  <FormLabel component="legend">Analytics:</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewAnalytics}
                        onChange={handlerChange}
                        name="viewAnalytics"
                      />
                    }
                    label="View Analytics"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.capability.viewTotal}
                        onChange={handlerChange}
                        name="viewTotal"
                      />
                    }
                    label="View Total Earning"
                  />
                </FormControl>
              </FormGroup>
            </div>
            <ButtonDefault className="mr-15" onClick={handlerUpdate}>
              Update Role
            </ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
          <Message
            className={message.className}
            message={message.message}
          ></Message>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <ButtonDefault onClick={handlerOpen} className="mr-15">
        Edit Role
      </ButtonDefault>
      <ModalBox />
    </>
  );
};
