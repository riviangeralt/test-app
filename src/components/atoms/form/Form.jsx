import PropTypes from "prop-types";
import { FormProvider } from "react-hook-form";

const Form = (props) => {
  const { methods, onSubmit, children, ...rest } = props;
  return (
    <FormProvider {...methods} autoComplete="off">
      <form onSubmit={onSubmit} {...rest} autoComplete="off">
        {children}
      </form>
    </FormProvider>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
};

export default Form;
